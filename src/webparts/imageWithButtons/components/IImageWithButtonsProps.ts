import { WebPartContext } from "@microsoft/sp-webpart-base";

import { DisplayMode} from '@microsoft/sp-core-library';

export interface IImageWithButtonsProps {
  description: string;
  currentContext:WebPartContext;
  currentDisplayMode: DisplayMode;
}
