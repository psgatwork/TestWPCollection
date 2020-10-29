import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'OotbWebPartModifierApplicationCustomizerStrings';

const LOG_SOURCE: string = 'OotbWebPartModifierApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IOotbWebPartModifierApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class OotbWebPartModifierApplicationCustomizer
  extends BaseApplicationCustomizer<IOotbWebPartModifierApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    let allIframes = document.querySelectorAll("iframe");
    let streamIframe;
    for (let j = 0; j < allIframes.length; j++) {
      if (this._IsStreamIFrame(allIframes[j].outerHTML)) {
        streamIframe = allIframes[j];
      }
    }

    //const demoClasses = document.querySelectorAll('.demo-class');
    let iterator = setInterval(() => {
      const nextButtn = document.getElementsByClassName('.demo-class');
      for (let i = 0; i < nextButtn.length; i++) {
        nextButtn[i].setAttribute('style', 'background-color: yellow;');
      }
      console.log('inside looper');
    }, 1000);

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message} added`);

    return Promise.resolve();
  }

  private _IsStreamIFrame(outerHTML: string): boolean {
    let searchValue = outerHTML.search("microsoftstream.com");
    if (searchValue > 0) {
      return true;
    } else {
      return false;
    }
  }
}
