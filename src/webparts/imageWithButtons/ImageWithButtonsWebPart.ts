import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'ImageWithButtonsWebPartStrings';
import ImageWithButtons from './components/ImageWithButtons';
import { IImageWithButtonsProps } from './components/IImageWithButtonsProps';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IImageWithButtonsWebPartProps {
  description: string;
  currentContext: WebPartContext;
  currentDisplayMode: DisplayMode;
}

export default class ImageWithButtonsWebPart extends BaseClientSideWebPart<IImageWithButtonsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IImageWithButtonsProps> = React.createElement(
      ImageWithButtons,
      {
        description: this.properties.description,
        currentContext: this.context,
        currentDisplayMode: this.displayMode
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onDisplayModeChanged(oldDisplayMode: DisplayMode) {
    this.properties.currentDisplayMode = this.displayMode;
    this.render();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
