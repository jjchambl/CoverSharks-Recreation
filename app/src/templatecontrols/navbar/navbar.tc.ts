import {controls, events, register, ui, web} from 'platypus';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;
    
    initialize(): void {
        this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
            this.drawerController.control.close();
        });
    }
}

register.control('navbar', NavbarTemplateControl);
