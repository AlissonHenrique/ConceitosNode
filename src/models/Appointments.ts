import { da } from 'date-fns/locale';
import { uuid } from 'uuidv4';
class Appointment {
  id: String;
  provider: String;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    (this.provider = provider), (this.date = date), (this.id = uuid());
  }
}

export default Appointment;
