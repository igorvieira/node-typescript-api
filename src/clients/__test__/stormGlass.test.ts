import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3hoursFixture  from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalizedResponse3hoursFixture  from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios')

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = -151.792726;

    mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3hoursFixture })

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalizedResponse3hoursFixture)
  })
})