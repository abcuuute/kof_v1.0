import { Player } from "/static/js/player/base.js";
import {GIF} from "/static/js/utils/gif.js"

export class Kyo extends Player{
    constructor(root, info){
        super(root, info);
        this.init_animations();
    }

    init_animations(){
        let outer = this;
        let offsets = [0,-25, -25, -150, 0, 0, 0];
        for (let i = 0; i < 7;i++){
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,//总图片数
                frame_rate: 5, //每5帧过度一次
                offset_y: offsets[i], //每个gif高度不一致
                loaded: false,
                scale: 2, //放大
            });
            gif.onload = function(){
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
            }
        }
    }
}