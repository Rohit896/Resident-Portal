import Utils from 'src/app/app.util';
import * as appConstanst from '../../../app.constants';

export class RequestModel {
  version = appConstanst.VERSION;
  requesttime = Utils.getCurrentDate();
  constructor(private id: string, private request: any, private metadata?: any) {}
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
=======
>>>>>>> 95ba7d75ddac90ff33dfc6b84647629e23de1696
