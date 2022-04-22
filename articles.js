var articles={
	"portfolio" : {
		"title" : "Just finished my portfolio!",
		"date" : "<p>30 02 </p><h1>2021</h1>",
		"content" : '<h2>OMG, It\'s now an old story!</h2>'+
				'<p>I\'ve made a lot of tries, tested differents technics, made a lot of paper layouts.<br>Finally, it\'s here, under my and <u>your</u> eyes.</p>'+
				'<p>I\'ve used only front-end, and really simple tools (Sublime Text without a license is really hard, and using an old browser is same).</p>'+
				'<h2>It\'s still a start</h2>'+
				'<p>I know it\'s know perfect, because nobody is perfect (unless God ;) )<br>For now, the main-design is still wip, I have loved it at the start; but right now it\'s not wonderful (but lighty).</p>'+
				'<p>Enjoy this really easy <mark> and free</mark> Python program that write my life during an endless ... but not eternal time :</p>'+
				'<pre class="code">import sys\nimport random\n\nalive=True\nwhile alive:\n	sys.stdout.write(f\'I\'m {random.choice(["walking","designing","eating","making a brainstroming","programming","sleeping","reading","praying","twitting","chilling"])}.\\n\')</pre>'+
				'<p class="italic">Have a nice day!</p>'

	},


	"pythonboost" : {
		"title" : "How to boost your Python program shell display.",
		"date" : "<p>30 02 </p><h1>2021</h1>",
		"content" : '<h2>Typical example of a problematic use:</h2>\
<p>Let\'s go for this example code. We use the famous builtin print function.</p>\
<pre class="code">for i in range(10000):\n	print(i,end="")</pre>\n\
<p>It seems interesting, we\'ve got around 0.125 seconds (removed the newline, else it\'ll take 5 seconds).</p>\
<h2>But there\'s a way to make it faster than everything</h2>\
<p>Our Python program can be improved with that:</p>\
<pre class="code">\
import sys\n\n\
for i in range(10000){\n\
	sys.stdin.write(i.__str__()) ;\
</pre>\
<p>And it takes only <big>0.03</big> seconds, unbelievable!</p>\
<p>For clarify this obvious code: I used the int object\'s (here the \'i\' variable) __str__ method , which convert our integer to a string.<br>\
(needed type for the sys.stdout.write method).<br>\
Usually, we use the str <s>function</s> object, that convert it to a string, but do you know \
what it does? It calls our integer\'s __str__ method , so we don\'t need to loose so much time. (up to 20% in some cases)\
<br> That\'s why I\'m using it, it\'s a really nice tip and performance saver.\
</p>\
\
<p>👆 With a newline character, it\'s reaaly slower, but the stdout.swite is still faster.</p>\
<p>Maybe it doesn\'t seem really significative or useful, but on a cheap hardware it is!<br>\
I remember using these two displaying ways on a TI-83 PCE Python calculator: print was 3x slower than sys.stdout.write ...\
And I\'m sure your friends will like this "geek" way.</p>\
<p class="italic">May the creativity be with you!</p>'

	},



	"fckversions" : {
		"title" : "Hall of fame: all my lost portfolios tries: ",
		"date" : "<p>30 02 </p><h1>2021</h1>",
		"content" : '<h2>There\'s a lot of examples here(most of them were wip):</h2>'+
				'<br><br>'+
				'<img src="pictures/v0.png" class="intext">'+
				'<p>It seemed to me a good start, such a nice old blog style...</p><hr>'+
				'<img src="pictures/v0,5.png" class="intext">'+
				'<p>Improved the style, and you can recognize here some parts of this version\
				 in the current website design...</p><hr>'+

				'<img src="pictures/v1.png" class="intext">'+
				'<p>I have always loved Dark mode , like any good dev (Discord,Sublime Text,CodePen) \
				 ❗(Sadly I can\'t bear Github Dark...), thus I\'ve wanted to try this "dark" way.</p><hr>'+
				'<img src="pictures/v2.png" class="intext">'+
				'<p>We\'re going closer and closer to the current version, and it\'s time to make \
				flexible layouts like this.</p><hr>'+
				'<img src="pictures/v3.png" class="intext">'+
				'<p>Improving some appearance, like a better background, a gradient, and some cool design tricks \
				like this rounded corners title box, or text-shadow for relief.</p>'+
				'<img src="pictures/v4.png" class="intext">'+
				'<p>When I have decided to remake all from scratch... <br>\
				Giant Time loss, but great projects box design found!</p>'+
				'<h2>Here we go!</h2>'+
				'<img src="pictures/v5.png" class="intext">'+
				'<p>Our archives trip ended here, the 15 March 2021, but I\'m sure it\'s\
				not the last version.<br>I need to improve the landing screen, by the way...</p><hr>'+
				'<h2>For a gift, here\'s an Internet Explorer 11 test : </h2>'+
				'<img src="pictures/ie2.png" class="intexthalf">'+
				'<img src="pictures/ie3.png" class="intexthalf">'+
				'<p>IE11 includes a test mode for older IE versions, but I\'m sure it\'s enough\
				right now... flex seems not working properly, and linear-gradient works only\
				with degrees... I can\'t imagine difficulty 10 years ago...</p>'+
				'<p>Keep in mind that the web is always evolving, and its designers too 😉 ...</p>'+
				'<p class="italic">Have a nice day!</p>'

	},
};

