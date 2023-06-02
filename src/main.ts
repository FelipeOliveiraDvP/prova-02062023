import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Prova desenvolvedor II SENAI')
    .setDescription('Api Baseada nos requisitos disponíveis em https://github.com/ISTIC-1-34/SENAI-Backend-Challenge-01.01')
    .setContact('Felipe de Oliveira Souza', 'https://github.com/FelipeOliveiraDvP', 'felipe.deoliveira@sp.senai.br')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
