 $('button[type="submit"]').on('click', function(event) {
 		event.preventDefault();

 		const newJob = $('input[name="newJob"]').val();


 		$.ajax({
 			url: '/add',
 			method: 'POST',
 			data: {
 				title: newJob
 			}
 		})
 		.then(function(){
 			alert('Project added');
 		})
 		.catch(function(){
 				alert('Could not add project');
 		})
 });;
