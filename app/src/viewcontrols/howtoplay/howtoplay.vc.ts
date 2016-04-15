import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
// import VideosViewControl from '../viewcontrols/howtoplay/videos/videos.vc';

export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {
        getStart: true,
        getVideos: false
    };
    
    initialize(): void {
        console.log(`start: ${this.context.getStart}, videos: ${this.context.getVideos}`);
    }
    
    startView() {
        // if(this.context.getVideos === false) {
        //     this.context.getStart = true;
        // }
        
        // if (this.context.getVideos ===true) {
        //     this.context.getStart = false;
        // }
        
        // else {
        //     this.context.get = true,
        //     this.context.getStart = false;
        // }
        
        this.context.getVideos = false,
        this.context.getStart = true;
        
        console.log(`start: ${this.context.getStart}, videos: ${this.context.getVideos}`);
    }
    
    videoView() {
        // if(this.context.getStart === false) {
        //     this.context.getVideos = true;
        // }
        // if (this.context.getStart === true) {
        //     this.context.getVideos = false;
        // }
        
        // else {
        //     this.context.getStart = false,
        //     this.context.getVideos = true;
        // }
        
        this.context.getStart = false,
        this.context.getVideos = true;
        
        
        console.log(`start: ${this.context.getStart}, videos: ${this.context.getVideos}`);
    }
}

register.viewControl('howtoplay-vc', HowtoplayViewControl );

