import * as React from 'react';
import styles from './ImageWithButtons.module.scss';
import { IImageWithButtonsProps } from './IImageWithButtonsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react';


export default class ImageWithButtons extends React.Component<IImageWithButtonsProps, {}> {
  public render(): React.ReactElement<IImageWithButtonsProps> {
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
              <div  className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div  className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div  className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div  className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div  className={styles.baseContainer}>
                <div className={styles.imageContainer} >
                  <img className={styles.theImage} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"></img>
                </div>
                <div  className={styles.buttonContainer}>
                  <PrimaryButton text="Learn" onClick={this._alertClicked} allowDisabledFocus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

  private _alertClicked(): void {
    console.log('bt c');
  }
}
