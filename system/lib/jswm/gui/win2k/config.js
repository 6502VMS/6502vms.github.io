var JSWMImagePath = 'system/lib/jswm/gui/win2k/';
var JSWMTabMargins = 4; // total extra width of tab buttons (margins + borders)

var JSWMImages = {
	//add : 'add.png',
	closeTab : 'close_tab.png',
	closeWindow : 'close.png',
	expand : 'down.png',
	collapse: 'up.png'
};

var JSWMImagesHover = new Object();

for(i in JSWMImages)
{
	JSWMImagesHover[i] = JSWMImagePath + 'hover_' + JSWMImages[i];
	JSWMImages[i] = JSWMImagePath + JSWMImages[i];
	// pre-load
	(new Image()).src = JSWMImages[i];
	(new Image()).src = JSWMImagesHover[i];
}