import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 如果需要设置语言环境，可以导入相应的语言包
import utc from 'dayjs/plugin/utc'; // 解析 UTC 时间
import timezone from 'dayjs/plugin/timezone'; // 时区转换
import duration from 'dayjs/plugin/duration'; // 时间差计算

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

export default dayjs