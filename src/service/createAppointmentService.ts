import Appointments from '../models/Appointments';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

interface RequestDTO {
  date: Date;
  provider: String;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;
  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointments {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.fidBydate(
      appointmentDate,
    );
    if (findAppointmentInSameDate) {
      throw Error('This aappointment is alterady booked');
    }
    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}
export default CreateAppointmentService;
