// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base view and root window
//

var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});

//create home window
var win1 = Titanium.UI.createWindow({  
    title:'Landing Page',
    backgroundColor: '#006633'
});

//create label for home screen
var label1 = Titanium.UI.createLabel({
	color:'#66FF99',
	top: 10,
	text:'Learn JavaScript with ease!',
	font:{fontSize:28,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//add label to home screen
win1.add(label1);
//add home window to view
WinView.add(win1);
//create navigatin button to get to window 2
var NavButton1 = Ti.UI.createButton({
	title: 'Open Window 2',
	color: '#000000',
	width: '50%',
	top: 200,
	height: 30,
	backgroundColor: '#33b633',
	font: {
		fontSize: '20sp',
		fontWeight: 'bold'
	},
});
//add navigation button to home window
win1.add(NavButton1);
//add listener for navigation button
NavButton1.addEventListener('click', function() {
	win2.open();
});

// create window 2

var win2 = Titanium.UI.createWindow({  
    title:'Child Page',
    backgroundColor:'#66FF99'
});

//create a Heading Label for window 2
var label2 = Titanium.UI.createLabel({
	color:'#000000',
	top:10,
	text:'It is as easy as 1-2-3!',
	font:{fontSize:28,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//add label to window2
win2.add(label2);

//create a navigation button for window 2
var NavButton2 = Ti.UI.createButton({
	title: 'Home',
	color: '#33b366',
	top: 160,
	width: '50%',
	height: 30,
	backgroundColor: '#006633',
	font: {
		fontSize: '20sp',
		fontWeight: 'bold'
	}
});

//add navigation button to window 2
win2.add(NavButton2);

//add listener for navigation button
NavButton2.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	win2.close();
});

//open the home window
win1.open();
