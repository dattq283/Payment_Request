import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BusinessException } from './errors/business.exception';
import { AllExceptionsFilter } from './errors/all-exceptions.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hệ thống quản lý đề nghị thanh toán')
    .setDescription(
      'API quản lý đề nghị thanh toán nội bộ: tạo, duyệt và thanh toán.',
    )
    .setVersion('0.1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const extra = errors.filter((e) => e.constraints?.whitelistValidation);
        if (extra.length > 0) {
          return new BusinessException('ERR-100', undefined, {
            fields: extra.map((e) => e.property),
          });
        }
        const missing = errors.filter((e) => e.constraints?.IsNotEmpty);
        if (missing.length > 0) {
          return new BusinessException('ERR-101', undefined, {
            fields: errors.map((e) => e.property),
          });
        }
        return new BusinessException('ERR-107', undefined, {
          fields: errors.map((e) => e.property),
        });
      },
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
