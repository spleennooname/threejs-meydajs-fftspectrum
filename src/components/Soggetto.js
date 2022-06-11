import { Subject } from 'rxjs';

const subject = new Subject();

export const subjectService = {
    send: event => subject.next(event),
    clear: () => subject.next(),
    asObservable: () => subject.asObservable()
};