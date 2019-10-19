const Request = new XMLHttpRequest()
const URL = "https://jsonplaceholder.typicode.com/posts"
Request.open("GET", URL)
Request.send()

let resFinal = []
Request.onreadystatechange = (e) => {
	const res = Request.responseText
	const resFinal = JSON.parse(res)
	let htmlPrint = ''
	resFinal.map((post) => {
		htmlPrint += '<article class="col-lg-4" style="border: 1px solid black; height: 200px"><h4>'+post.title+'</h4>'+post.body+'</article>'
	
	})
	document.getElementById("posts").innerHTML = htmlPrint
}

