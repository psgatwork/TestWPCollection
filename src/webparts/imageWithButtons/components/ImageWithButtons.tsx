import * as React from 'react';
import styles from './ImageWithButtons.module.scss';
import { IImageWithButtonsProps } from './IImageWithButtonsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';
import { DisplayMode } from '@microsoft/sp-core-library';

export default class ImageWithButtons extends React.Component<IImageWithButtonsProps, {}> {

  public render(): React.ReactElement<IImageWithButtonsProps> {
    let propertyExtender = this._filePickerCons();
    return (
      <div className={styles.imageWithButtons}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.baseContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            {propertyExtender}

          </div>
        </div>
      </div>

    );
  }

  private _alertClicked(): void {
    console.log('bt c');
  }

  private _filePickerCons() {
    console.log('display mode s');
    if (this.props.currentDisplayMode == DisplayMode.Edit) {
      console.log('edit mode');
      return <FilePicker
        bingAPIKey="<BING API KEY>"
        accepts={[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
        buttonIcon="FileImage"
        onSave={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }) }}
        onChanged={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }) }}
        context={this.props.currentContext}
      />;
    } else if (this.props.currentDisplayMode == DisplayMode.Read) {
      console.log('read mode');
      return null;
    }
  }


}
