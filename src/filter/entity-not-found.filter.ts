import { NotFoundError } from '@mikro-orm/core';
import {
  ArgumentsHost,
  Catch,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch(NotFoundError)
export class EntityNotFoundFilter<T> implements GqlExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);

    // You can log the error or perform other actions here
    Logger.error(exception.message, 'EntityNotFoundFilter');

    // Customize the error response
    return new NotFoundException(
      `Requested entity not found | ${exception.message}`,
    );
  }
}
