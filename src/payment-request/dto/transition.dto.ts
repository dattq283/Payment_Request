import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RequestStatus } from '../../generated/prisma/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransitionDto {
  @ApiProperty({
    enum: RequestStatus,
    example: RequestStatus.TRUONG_PHONG_DUYET,
  })
  @IsNotEmpty()
  @IsEnum(RequestStatus)
  to!: RequestStatus;

  @ApiPropertyOptional({ example: 'Thiếu hoá đơn VAT bản gốc' })
  @IsOptional()
  @IsString()
  note?: string;
}
