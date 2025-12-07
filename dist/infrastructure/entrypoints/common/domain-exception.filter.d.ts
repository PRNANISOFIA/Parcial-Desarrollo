import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class DomainExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): any;
}
