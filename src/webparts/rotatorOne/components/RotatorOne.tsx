import * as React from 'react';
import styles from './RotatorOne.module.scss';
import { IRotatorOneProps } from './IRotatorOneProps';
import { escape } from '@microsoft/sp-lodash-subset';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default class RotatorOne extends React.Component<IRotatorOneProps, {}> {
  public render(): React.ReactElement<IRotatorOneProps> {
    return (
      // <div className={ styles.rotatorOne }>
      //   <div className={ styles.container }>
      //     <div className={ styles.row }>
      //       <div className={ styles.column }>
      //         <span className={ styles.title }>Welcome to SharePoint!</span>
      //         <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
      //         <p className={ styles.description }>{escape(this.props.description)}</p>
      //         <a href="https://aka.ms/spfx" className={ styles.button }>
      //           <span className={ styles.label }>Learn more</span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className={styles.rotatorOne}>
        <div className={styles.container}>
          <div className={styles.row}>
            <AwesomeSlider
              media={[
                {
                  source: 'https://images.wallpaperscraft.com/image/magic_ball_library_columns_castle_63093_1920x1080.jpg',
                },
                {
                  source: 'https://images.wallpaperscraft.com/image/cliffs_waterfalls_mist_nature_68876_1920x1080.jpg',
                },
                {
                  source: 'https://images.wallpaperscraft.com/image/microcircuit_circuit_bw_126894_1920x1080.jpg',
                },
              ]}
            />
          </div>
        </div>
      </div>


    );
  }
}
