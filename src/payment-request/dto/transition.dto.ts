import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
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

  //Thêm version cho mỗi lần đề nghị bị thay đổi: chặn race condition: hai người bấm duyệt/từ chối cùng 1 lúc
  @ApiProperty({ example: 0 })
  @IsNotEmpty()
  @IsInt()
  version!: number;
}
