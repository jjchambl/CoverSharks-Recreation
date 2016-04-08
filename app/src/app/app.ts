import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import PromotionsViewControl from '../viewcontrols/promotions/promotions.vc';
import HowtoplayViewControl from '../viewcontrols/howtoplay/howtoplay.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/about', view: AboutViewControl },
            { pattern: '/promotions', view: PromotionsViewControl },
            { pattern: '/howtoplay', view: HowtoplayViewControl}
            
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
