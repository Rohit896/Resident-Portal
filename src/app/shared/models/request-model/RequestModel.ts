import Utils from 'src/app/app.util';
import * as appConstanst from '../../../app.constants';

export class RequestModel {
  version = appConstanst.VERSION;
  requesttime = Utils.getCurrentDate();
  constructor(private id: string, private request: any, private metadata?: any) {}
}
<<<<<<< HEAD

=======
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
