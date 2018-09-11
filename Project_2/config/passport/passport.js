const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, User) {
    //console.log("*********** " + User)
    const user = User;
    const LocalStrategy = require('passport-local').Strategy;

    passport.use(
        'local-signin',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            (req, email, password, done) => {
                const user = User;
                const isValidPassword = (userPass, pass) => bCrypt.compareSync(pass, userPass);

                user.findOne({
                    where: {
                        email: email
                    }
                })
                    .then((user) => {
                        if (!user) return done(null, false, { message: 'Email does not exist' });
                        if (!isValidPassword(user.password, password))
                            return done(null, false, { message: 'Incorrect Password' });

                        //changed this from user.id to user.get() to match chris dont know why
                        const userInfo = user.get();
                        // console.log(userInfo);
                        return done(null, userInfo);
                    })
                    .catch((err) => {
                        console.error(err);
                        return done(null, false, { message: 'Something went wrong' });
                    });
            }
        )
    );

    passport.use(
        'local-signup',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            (req, email, password, done) => {
                const generateHash = (pass) => bCrypt.hashSync(pass, bCrypt.genSaltSync(8), null);

                User.findOne({
                    where: {
                        email: email
                    }
                }).then((user) => {
                    if (user) {
                        return done(null, false, { message: 'That email is already taken' });
                    }

                    const userPassword = generateHash(password);
                    const data = {
                        ...req.body,
                        password: userPassword
                    };

                    User.create(data).then((newUser, created) => {
                        if (!newUser) return done(null, false);

                        return done(null, newUser);
                    });
                });
            }
        )
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) =>
        User.findById(id).then((user) => (user ? done(null, user.get()) : done(user.errors, null)))
    );
};
