import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get('current')
  async getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);
  }
  @Get('forecast')
  async getForecast(@Query('city') city: string, @Query('days') days: number) {
    return this.weatherService.getForecast(city, days);
  }
}
