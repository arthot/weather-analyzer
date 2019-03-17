import { MODES } from '../../../../weather/constants'

import GrayCloudRainSunIcon from '../../../../images/weather/gray/cloud-rain-sun.svg';
import GrayCloudRainIcon from '../../../../images/weather/gray/cloud-rain.svg';
import GrayCloudSunIcon from '../../../../images/weather/gray/cloud-sun.svg';
import GrayCloundIcon from '../../../../images/weather/gray/cloud.svg';
import GraySunIcon from '../../../../images/weather/gray/sunny.svg';

import ColorCloudRainSunIcon from '../../../../images/weather/color/cloud-rain-sun.svg';
import ColorCloudRainIcon from '../../../../images/weather/color/cloud-rain.svg';
import ColorCloudSunIcon from '../../../../images/weather/color/cloud-sun.svg';
import ColorCloundIcon from '../../../../images/weather/color/cloud.svg';
import ColorSunIcon from '../../../../images/weather/color/sunny.svg';

import UnknownIcon from '../../../../images/weather/unknown.svg';

const ICONS_MAP = {
    [MODES.TEMPERATURE]: {
        CloudRainSunIcon: GrayCloudRainSunIcon,
        CloudRainIcon: GrayCloudRainIcon,
        CloudSunIcon: GrayCloudSunIcon,
        CloundIcon: GrayCloundIcon,
        SunIcon: GraySunIcon,
    },
    [MODES.PRECIPITATION]: {
        CloudRainSunIcon: ColorCloudRainSunIcon,
        CloudRainIcon: ColorCloudRainIcon,
        CloudSunIcon: ColorCloudSunIcon,
        CloundIcon: ColorCloundIcon,
        SunIcon: ColorSunIcon,
    }
}

const getIconSrc = (mode, data) => {
    if (!data)
        return UnknownIcon;

    const { fallout, cloudiness } = data;
    if (fallout) {
        if (cloudiness > 0.7)
            return ICONS_MAP[mode].CloudRainIcon;
        else
            return ICONS_MAP[mode].CloudRainSunIcon;
    } else {
        if (cloudiness > 0.7)
            return ICONS_MAP[mode].CloundIcon;
        else if (cloudiness > 0.2)
            return ICONS_MAP[mode].CloudSunIcon;
        else
            return ICONS_MAP[mode].SunIcon;
    }
}

export default getIconSrc;
