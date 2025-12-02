import { HttpException, Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
@Injectable()
export class WeatherService {
  constructor(private readonly configService: ConfigService) {}
  async getWeather(city: string) {
    try {
      const key = this.configService.get<string>('WEATHER_API_KEY');
      const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=vi`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Lỗi không lấy được thời tiết', 400);
    }
  }

  async getForecast(city: string, days: number) {
    try {
      const key = this.configService.get<string>('WEATHER_API_KEY');
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&lang=vi`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new HttpException('Lỗi không lấy được dự báo thời tiết', 400);
    }
  }
}
