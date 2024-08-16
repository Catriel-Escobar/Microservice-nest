import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../enum/order-status.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Possible status values are: ${OrderStatus.CANCELLED}, ${OrderStatus.PENDING} ${OrderStatus.DELIVERED}`,
  })
  status: OrderStatus;
}
