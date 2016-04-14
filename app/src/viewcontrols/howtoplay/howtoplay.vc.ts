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
        if(this.context.getVideos === false) {
            this.context.getStart = true;
        }
        else {
            this.context.getVideos = false;
        }
        
        // this.context.getVideos = !this.context.getStart || this.context.getVideos;
        
        console.log(`start: ${this.context.getStart}, videos: ${this.context.getVideos}`);
    }
    
    videoView() {
        if(this.context.getStart === false) {
            this.context.getVideos = true;
        }
        else {
            this.context.getStart = false;
        }
        
        // this.context.getStart = !this.context.getVideos;
        
        console.log(`start: ${this.context.getStart}, videos: ${this.context.getVideos}`);
    }
}

register.viewControl('howtoplay-vc', HowtoplayViewControl );

