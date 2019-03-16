import CloudRainSunIcon from '../../../../images/weather/cloud-rain-sun.svg';
import CloudRainIcon from '../../../../images/weather/cloud-rain.svg';
import CloudSunIcon from '../../../../images/weather/cloud-sun.svg';
import CloundIcon from '../../../../images/weather/cloud.svg';
import SunIcon from '../../../../images/weather/sunny.svg';
import UnknownIcon from '../../../../images/weather/unknown.svg';

const IconSrc = (data) => {
    if (!data)
        return UnknownIcon;

    const { fallout, cloudiness } = data;
    if (fallout) {
        if (cloudiness > 0.7)
            return CloudRainIcon;
        else
            return CloudRainSunIcon;
    } else {
        if (cloudiness > 0.7)
            return CloundIcon;
        else if (cloudiness > 0.2)
            return CloudSunIcon;
        else
            return SunIcon;
    }
}

export default IconSrc;
