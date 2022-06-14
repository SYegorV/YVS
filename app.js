



//site         ? : and наложение теней в контур 
// (function (w) {
//     w.Plane2D = function (interval) {
//         interval = interval || 40;
//         let j = 0;
//         setInterval(function () {
//             let els = document.querySelectorAll(".plane2d");
//             j--;
//             for (let i = 0; i<els.length; i++) {
//                 els[i].style.backgroundPosition = j + "px 0px";
//             }
//         }, interval);
//     }
// }) (window);



// // let heightWindow = window.innerHeight;
let width = 1600; //document.body.clientWidth
let height = 800; // //document.body.clientHeight

let Application = PIXI.Application,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Text = PIXI.Text,
TextStyle = PIXI.TextStyle,
Graphics = PIXI.Graphics,
renderer = PIXI.autoDetectRenderer(width, height);

let game = new PIXI.Application({width:width, height:height}); // ширина высота
game.renderer.backgroundColor=0xffffff;//0x061639;
game.renderer.autoRezise = true;
document.getElementById("blootwo").appendChild(game.view); //to jobing (^_^)



// объект приложения PIXI.Applecation (может автоматически создать canvas)
//<output>  </output> --- const output = document.querySelector('output') --- output.textContent
// let aapp = new PIXI.Applecation({ width: 400, height: 300, view: document.querySelector("canvas") }); //заявка
// let aapp = new PIXI.Applecation({ width: 400, height: 300 }); //заявка
// aapp.renderer.backgroundColor = 0xff0088; //?
// document.body.appendChild(aapp.view); //<canvas>  </canvas> // создалась метка
// aapp.renderer.backgroundColor = 0xff0032; //?
// transparent --- по умолчанию false --- вид прозрачен?
// повышение разрешения изображения --- @2x --- добавить к имени файла изображения
// app.resizeTo  --- изменение размера элемента или окна
// спрайт это изображение которым можно управлять с помощью кода
// изображение которое может обрабатывать графический процессор, называется текстурой [имя текстуры это адрес изображения]
// получить изображение из кеша текстур : --- PIXI.utils.TextureCache["images/cat.png"]

// //текстуры хранятся в формате, совместимом с WebGL, что делает рендеринг pixi более эффективным
// // получить изображение из кеша текстур и преобразовать их в текстуры:
// // загружаем изображение в кеш текстуры
// let texture = PIXI.utils.TextureCache["images/cat.png"]
// // применяем текстуру для создания спрайта:
// let sprite = new PIXI.Sprite(texture)

// атлас текстуры - это файл данных JSON, который содержит размер и расположение суб-изображений спрайтов PNG
// нужно знать имя 

// // высокопроизводительный контейнер ParticleContainer --- спрайт отображается быстрее в 2-5 раз (спрайт обрабатывается на GPU) : (для одной текстуры)
// let ParticleContainer = PIXI.ParticleContainer;
// let particleContainer = new ParticleContainer()

// проверка на соприкосновение ( два прямоугольника ):
// let boolean = hitTestRectangle(sprite1 , sprite2); // возвращает true or false

// aapp.stage = new PIXI.Container(); //контейнер
// aapp.ticker = new PIXI.Ticker(); // таймер
// aapp.renderer = new PIXI.Renderer(); //рендерер
// aapp.loader = new PIXI.Renderer(); //загрузчик







let stage = new PIXI.Container();
stage.interactive = true;
let graphics = new PIXI.Graphics();

graphics.lineStyle(10,0xFF0000,0.8);
graphics.beginFill(0xFF700B,1);
// graphics.moveTo(210,300);
// graphics.lineTo(450,320);
// graphics.lineTo(570,350);
// graphics.quadraticCurveTo(600,0,480,100);
// graphics.lineTo(330,120);
// graphics.lineTo(410,200);
// graphics.lineTo(210,300);
graphics.endFill();

game.stage.addChild(graphics); //53 //add app.



let style = new PIXI.TextStyle({
//     fontFamily: 'Montserrat',
//     fontSize: 125,
//     fill: 'deepskyblue',
//     stroke: '#ffffff',
//     strokeThickness: 8,
//     dropShadow: true,
//     dropShadowDistance: 10,
//     dropShadowAngle: Math.PI / 2,
//     dropShadowBlur: 8,
//     dropShadowColor: '#000000'
})
let myText = new PIXI.Text()
//let myText = new PIXI.Text('Hello World', style)
game.stage.addChild(myText)
// myText.text = 'pixi com' //обновили текст
// myText.style.wordWrap = true // с новой строки
// myText.style.wordWrapWidth = 100
myText.style.align = 'center' // текст по центру
//console.log(stage)

let turtle = PIXI.Texture.from('turtle.PNG')
let char1Sprite = new PIXI.Sprite(turtle)
char1Sprite.width = 75 // размер
char1Sprite.height = 75
game.stage.addChild(char1Sprite) //отобразить на холсте
char1Sprite.x = 50 //расположение на холсте
char1Sprite.y = 50



// class Rabbit {
//     constructor(type) {        
//         this.type = type
//         //console.log(this.type) //черный
//         this.speak( 'good' ) //вызвать speak()
        
//     }
//     speak(line) {        
//         console.log(`${this.type} кролик : ${line} `) // черный кролик : good 
//     }
// }
// let blackRabbit = new Rabbit('черный') // вызвать class Rabbit
// console.log(blackRabbit)
// window.onload = () => { // вызвать class Rabbit
//     new Rabbit('черный');
// };

// class Visual {
//     constructor() {
//         this.type = 'черный'
//         //console.log(this.type) //черный
//     }
//     show() {

//     }
// }
///////////////////////////////////////////////////////////////////////
let FRICTION = 0.98;
let COLOR_SPEED = 0.12;
let MOVE_SPEED = 0.88;
class Particle {
    constructor(pos, texture) {
        // let char1Texture = PIXI.Texture.from('turtle.PNG')
        // let char1Sprite = new PIXI.Sprite(char1Texture)
        // char1Sprite.width = 50 // размер
        // char1Sprite.height = 50
        // game.stage.addChild(char1Sprite) //отобразить на холсте
        
        this.sprite = new PIXI.Sprite(texture);
        //game.stage.addChild(this.sprite) //отобразить на холсте
        this.sprite.scale.set(0.06); //char1Sprite.scale.set(1, 1) // размер

        this.savedX = pos.x;        
        this.savedY = pos.y;
        
        this.x = pos.x;
        this.y = pos.y;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 10;

        this.savedRgb = 0xffff6e;            //0xffffff//0x00ff00//0xf3316e;        
        this.rgb = 0xffffff;                 //0xffffff//0x00ffff//0xf3316e;        
    }
    collide() {
        
        this.rgb = 0x451966;
    }
    draw() {
        
        this.rgb += (this.savedRgb - this.rgb) * COLOR_SPEED;

        this.x += (this.savedX - this.x) * MOVE_SPEED;
        this.y += (this.savedY - this.y) * MOVE_SPEED;

        this.vx *= FRICTION;
        this.vy *= FRICTION;

        this.x += this.vx;
        this.y += this.vy;

        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.tint = this.rgb;        
    }
}
///////////////////////////////////////////////////////////////////////
class Textqwer {
    constructor(strthree) { // cool
        this.canvas = document.createElement('canvas'); // какой тег нужно создать [div]
        
        
        this.ctx = this.canvas.getContext('2d');
        
        this.setText(strthree) //вызвать speak()
    }
    setText(str) { //(str, density, stageWidth, stageHeight) { // ?
        
        let stageWidth = 1600 // ширина расположение надписи
        let stageHeight = 600 // высота расположение надписи
        let density = 4 // коэффициент количества

        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;
        
        let myText = str;        
        let fontWidth = 700 //700;
        let fontSize = 500; //800
        let fontName = 'Hind';

        this.ctx.clearRect(0, 0, stageWidth, stageHeight);        
        this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;        
        this.ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;        
        this.ctx.textBaseline = `middle`;        
        let fontPos = this.ctx.measureText(myText);        
        this.ctx.fillText(
            myText,
            (stageWidth - fontPos.width)/2,
            fontPos.actualBoundingBoxAscent +
            fontPos.actualBoundingBoxDescent +
            ((stageHeight - fontSize) / 2 )
        );
        
        return this.dotPos(density, stageWidth, stageHeight);
    }
    dotPos(density, stageWidth, stageHeight) {
        let imageData = this.ctx.getImageData(
            0, 0,
            stageWidth, stageHeight
        ).data;
        let particles = [];
        let i = 0;
        let width = 0;
        let pixel;

        for (let height=0; height<stageHeight; height+=density) {
            ++i;
            let slide = (i % 2) == 0;
            width = 0;
            if (slide == 1) {
                width += 6;
            }

            for (width; width<stageWidth; width+=density) {
                pixel = imageData[((width + (height * stageWidth))*4)-1];
                if (pixel != 0 && width>0 && width<stageWidth && height>0 && height<stageHeight) {
                    particles.push({
                        x: width,
                        y: height,
                    });
                }
            }
        }        
        return particles;
    }
}
///////////////////////////////////////////////////////////////////////
class Visual {
    constructor(strtwo) {
        this.text = new Textqwer(strtwo); // constructor cool
        
        // let char1Texture = PIXI.Texture.from('turtle.PNG')
        // let char1Sprite = new PIXI.Sprite(char1Texture)
        // char1Sprite.width = 50 // размер
        // char1Sprite.height = 50
        // game.stage.addChild(char1Sprite) //отобразить на холсте

        // this.texture = PIXI.Texture.from('turtle.PNG')
        this.texture = PIXI.Texture.from('whitebox.PNG')
        let char2Sprite = new PIXI.Sprite(this.texture)
        char2Sprite.width = 75 // размер
        char2Sprite.height = 75
        //game.stage.addChild(char2Sprite) //отобразить на холсте
        //char1Sprite.x = 50 //расположение на холсте
        //char1Sprite.y = 50

        this.particles = [];

        this.mouse = {
            x: 0,
            y: 0,
            radius: 100
        }
                
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        
        let stageWidth = 200 //1600
        let stageHeight = 200 //600

        this.show(stageWidth, stageHeight)//, this.stage)
        this.animate()
    }

    show(stageWidth, stageHeight) { //, stage) {
        
        if (this.container) {
            stage.removeChild(this.container);
        }

        this.pos = this.text.setText('YVS', 2, stageWidth, stageHeight); // text 
        
        this.container = new PIXI.ParticleContainer(
            this.pos.length,
            {
                vertices: false,
                position: true,
                rotation: false,
                scale: false,
                uvs: false,
                tint: true,
            }
        );
             
        game.stage.addChild(this.container);

        this.particles = [];
        for (let i=0; i<this.pos.length; i++) {
            let item =new Particle(this.pos[i], this.texture);   // вызвать class Particle:               
            this.container.addChild(item.sprite);
            this.particles.push(item); // 1 2 3            
        }
        
    }

    animate() {
        
        for (let i=0; i<this.particles.length; i++) {
            let item = this.particles[i];            
            let dx = this.mouse.x - item.x;
            let dy = this.mouse.y - item.y;
            let dist = Math.sqrt(dx * dx + dy * dy);            
            let minDist = item.radius + this.mouse.radius;

            if (dist < minDist) {
                let angle = Math.atan2(dy, dx);
                let tx = item.x + Math.cos(angle) * minDist;
                let ty = item.y + Math.sin(angle) * minDist;
                let ax = tx - this.mouse.x;
                let ay = ty - this.mouse.y;
                item.vx -= ax;
                item.vy -= ay;
                item.collide();                
            }
            item.draw();
        }
    }

    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
}




           






// import {Text} from './text.js';
// import {Visual} from './visual.js'; //'./visual.js';
class App {
    constructor(strone) {
        this.setWebjl(); //вызвать setWebjl()
        
        
            
              
                this.visual = new Visual(strone); // вызвать class Visual :
                //console.log(this.visual) //черный


                window.addEventListener('resize', this.resize.bind(this), false);    
                this.resize(); 
                requestAnimationFrame(this.animate.bind(this));
                
            
        
    }
    setWebjl() {
        
        this.renderer = new PIXI.Renderer({ // ширина и высота холста По умолчанию применяется WebGL 
            width: 0, //document.body.clientWidth,
            height: 0, //document.body.clientHeight,
            antialias: true,
            transparent: false,
            resolution: (window.devicePixelRatio>1) ? 2 : 1,
            autoDensity: true,
            powerPreference: "high-performance",
            backgroundColor: 0x061639,
        });        
        
        // this.renderer.resize(212, 212); //изменить размер холста
        
        //document.body.appendChild(this.renderer.view); //Добавляем отрисовщик в HTML документ

        this.stage = new PIXI.Container(); //Создаем объект-контейнер, называемый сцена      
        
    }
    resize() {
        this.stageWidth = 600 // document.body.clientWidth;
        this.stageHeight = 200 // document.body.clientHeight;
        
        this.renderer.resize(this.stageWidth, this.stageHeight);

        this.visual.show(this.stageWidth, this.stageHeight, this.stage);
    }
    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.visual.animate();
        this.renderer.render(this.stage);
    }
}

window.onload = () => { // вызвать class App
    new App(myText);
    //new App(myText.text);
};


















