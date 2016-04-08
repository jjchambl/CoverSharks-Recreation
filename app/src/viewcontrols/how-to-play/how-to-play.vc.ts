import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class How-to-playViewControl extends BaseViewControl {
    templateString: string = require('./how-to-play.vc.html');

    context: any = {};
}

register.viewControl('how-to-play-vc', How-to-playViewControl);
