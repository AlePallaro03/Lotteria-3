var CONFIG = {	
	
	serverName: "Ale & Luk",
	serverLink: "",
	volume: 0, //volume di partenza audio
	//videoVolume: 0.1,

  
	backgroundCard: [
        { bg:'img/background/Logo.jpg', /*character:'img/background/',*/ loadcolor:'rgb(230,230,176)' },
	],
	
	audioList: [
       
        { name: 'Casino by Ale & Luk', link:'music/music.mp3' }
    ],
	
	contacts: [

	],
	
	news: [
    ],
	
	rules: [
        { 
			title:'Depositi e Ritiro', 
			text:[
                {t:'Cosa utilizzare per depositare soldi?:  '},
				{t: 'Nel nostro casinò sarà possibile effettuare depositi utilizzando Paypal, Satispay e qualsiasi carta Mastercard'},
                {t:'Come posso prelevare i miei soldi?'},
				{t:'I soldi potranno essere prelevati su qualsiasi wallet online, tramite bonifico bancario o sul proprio conto Paypal '}
            ]
		},
	],


};


var BG = {
	
	onLoadPage: function()
    {
		document.querySelectorAll('.servername').forEach((elem) => { elem.innerText = CONFIG.serverName;}); //prendiamo servername e per ogni elemento ne inseriamo il server name
		serverLink.innerText = CONFIG.serverLink;
		musicVolumeSlider.value = CONFIG.volume;
		
		
		BG.onLoadContent();
		BG.effectCard();
		
		window.addEventListener('message', (e) => 
		{
			(LOAD.handlers[e.data.eventName] || function() { })(e.data);
		});
		
		window.addEventListener('mousemove', function(e) 
		{
			cursor.style.left = e.clientX + "px"; 
			cursor.style.top = e.clientY + "px";
		});
    },
	
	onLoadContent: function()
    {
		let idx = BG.getRandomInRange(0, CONFIG.backgroundCard.length - 1);
		cardCharacter.src = CONFIG.backgroundCard[idx].character;
		progressBar.style.backgroundColor = CONFIG.backgroundCard[idx].loadcolor;
		
		document.querySelectorAll('.background-img').forEach((elem) => { elem.src = CONFIG.backgroundCard[idx].bg;});
		idx = BG.getRandomInRange(0, CONFIG.audioList.length - 1);
		audioblock.src = CONFIG.audioList[idx].link;
		musicDesc.innerText = CONFIG.audioList[idx].name;

        CONFIG.news.forEach((element) => 
		{
			let img = element.img == '' ? `` : `<img class="news-img" src="${element.img}"/>`
			newsContainer.innerHTML += `<div class="warp-news-item">							
							<div class="news-item">
								${img}
								<div class="news-info">
									<div class="news-title">${element.title}</div>
									<div class="news-desc">${element.desc}</div>
								</div>
							</div>
						</div>`;
		});
				
		CONFIG.rules.forEach((element) =>
		{
			rulesContainer.innerHTML += `<div class="item-rules"><div class="rules-tittle">${element.title}</div>` + BG.resultText(element.text); +`</div>`;
		});
		
        CONFIG.contacts.forEach((element) => 
		{
			contactContainer.innerHTML += `<div class="content-item">
							<img class="contact-avatar" src="${element.avatar}"/>
							<div style="width: 20px;"></div>
							<div class="content-info">
								<div class="contact-discord">${element.discord}</div>
								<div class="contact-title">${element.title}</div>
								<div class="contact-desc">${element.desc}</div>
							</div>
						</div>`;
		});
		
		V.onChangeVolume(CONFIG.volume);
    },
	
	onClickPageMenu: function(data, page)
    {		
		document.querySelectorAll('.menu-item').forEach((elem) => {elem.classList.remove('menu-item-active');});
		data.classList.add("menu-item-active");
		document.querySelectorAll('.content-page').forEach((elem) => {elem.style.display = 'none'; });
		let p = document.getElementById(`page_${page}`);
		p.style.display = 'flex';

    },



  //CREO EFFETTO DEL BOX CON MOVIMENTO A SECONDA DEL MOVIMENTO DEL CURSORE
	effectCard: function()
	{
		banner.addEventListener('mousemove', e => 
		{
			let mouseCoord = {x: e.offsetX, y: e.offsetY};
			mouseCoord.x = mouseCoord.x < 0 ? 0 : mouseCoord.x;
			mouseCoord.x = mouseCoord.x > banner.scrollWidth ? banner.scrollWidth : mouseCoord.x;
			mouseCoord.y = mouseCoord.y < 0 ? 0 : mouseCoord.y;
			mouseCoord.y = mouseCoord.y > banner.scrollHeight ? banner.scrollHeight : mouseCoord.y;

			let transformCard = "scale3d(1.08, 1.08, 1.08) perspective(700px)";
			transformCard += "rotateX(" + ((mouseCoord.y / banner.scrollHeight) * 6 - 3) + "deg)";
			transformCard += "rotateY(" + ((mouseCoord.x / banner.scrollWidth) * 8 - 4) * -1 + "deg)";
			transformCard += "translateX(" + ((mouseCoord.x / banner.scrollWidth) * 2 - 1) + "px)";
			transformCard += "translateY(" + ((mouseCoord.y / banner.scrollHeight) * 3 - 1.5) + "px)";			
			banner.style.transform = transformCard;

			let transformCardImage = "rotateX("+((mouseCoord.y/banner.scrollHeight) * 3 - 1.5) * - 1 + "deg)";
			transformCardImage += "rotateY("+((mouseCoord.x/banner.scrollWidth) * 8 - 4) * - 1 + "deg)";
			cardBackground.style.transform = transformCardImage;

			let backgroundShineLayerOpacity = (mouseCoord.y / banner.scrollHeight) * 0.05;
			let backgroundShineLayerDegree = (Math.atan2(mouseCoord.y - banner.scrollHeight / 2, mouseCoord.x - banner.scrollWidth / 2) * 180) / Math.PI - 90;
			backgroundShineLayerDegree =  backgroundShineLayerDegree < 0 ? (backgroundShineLayerDegree += 360) : backgroundShineLayerDegree;
			let backgroundShineLayer = "linear-gradient(" + backgroundShineLayerDegree+"deg, rgba(255,255,255,"+backgroundShineLayerOpacity+") 0%, rgba(255,255,255,0) 80%)";
			overlayShine.style.background = backgroundShineLayer;
		});
		
		banner.addEventListener('mouseenter', e => 
		{
			banner.classList.remove("overlay-gray");
		});
		
		banner.addEventListener('mouseleave', e => 
		{
			banner.classList.add("overlay-gray");
			banner.style.transform = 'scale3d(1, 1, 1)';
			cardBackground.style.transform = '';
			
			overlayShine.style.background = "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%)";
		});
	},



  
	resultText: function(elText)
	{
		let result = '';
        for (let i = 0; i < elText.length; i++) result += `<div class="rules-text">${elText[i].t}</div>`;
		return result;
	},
	
	getRandomInRange: function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};


var V = {
	
	isMuted: false,
	
	onClickMute: function()
	{
		if (V.isMuted)V.onUnmuted();
		else V.onMuted();
	},
	
	onMuted: function()
	{
		CONFIG.volume = musicVolumeSlider.value;
		
		musicVolumeSlider.value = 0;
		audioblock.volume = 0;

		musicVolumeIcon.src = "img/icons/volume-mute.png"
		V.isMuted = true;
	},
	
	onUnmuted: function()
	{
		musicVolumeSlider.value = CONFIG.volume;
		audioblock.volume = CONFIG.volume;

		V.updateIcon();
		V.isMuted = false;
	},
	
	updateIcon: function()
	{
		if (CONFIG.volume <= 0) musicVolumeIcon.src = "img/icons/volume-mute.png";
		else if(CONFIG.volume < 0.5) musicVolumeIcon.src = "img/icons/volume-low.png";
		else musicVolumeIcon.src = "img/icons/volume-loud.png";
	},
	
	onChangeVolume: function(value)
	{
        CONFIG.volume = value;
        audioblock.volume = value;
		if(V.isMuted == true && value > 0) V.isMuted = false;
		audioblock.play(); 
		V.updateIcon();
	},
	
	onChangeVolumeMouseSlider: function(value)
    {
		if(event.buttons == 1) V.onChangeVolume(value);
    }
};

var LOAD = {
	
	count: 0,
	thisCount: 0,
	
	handlers: {
		
		startInitFunctionOrder(data) 
		{
			LOAD.count = data.count;
		},
		
		initFunctionInvoking(data) 
		{
			let localdata = ((data.idx / LOAD.count) * 100);
			LOAD.updateProgress(localdata);
		},
		
		startDataFileEntries(data) 
		{
			LOAD.count = data.count;
		},
		
		performMapLoadFunction(data) 
		{
			++LOAD.thisCount;
			let localdata = ((LOAD.thisCount / LOAD.count) * 100);
			LOAD.updateProgress(localdata);
		}
	},
	
	updateProgress: function(data)
	{
        progressBar.style.left = '0%';
        progressBar.style.width = data + '%';
		//console.log(data+"%");
	}
};
