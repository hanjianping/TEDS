package mis.util;

public class Configuration {
	// 当日数据和历史数据每页显示记录数
	private static int pageSize;

	static {
		pageSize = 8;    // 当日数据和历史数据每页显示记录数
	}

	public static int getPageSize() {
		return pageSize;
	}

	// 视频模块每页显示记录数
	private static int pageVideoSize;

	static {
		pageVideoSize = 9;    // 视频模块每页显示记录数
	}

	public static int getPageVideoSize() {
		return pageVideoSize;
	}

	// 中心线偏移阈值
	private static double centerBiaseThreshold;

	public static double getCenterBiaseThreshold() {
		return centerBiaseThreshold;
	}
    public static double setCenterBiaseThreshold(double centerBiaseThreshold1){
        return centerBiaseThreshold=centerBiaseThreshold1;
    }
	// 左右倾斜阈值
	private static double lRAangleThreshold;
	
	public static double setLRAangleThreshold(double lRAangleThreshold1){
		return lRAangleThreshold=lRAangleThreshold1;
	}
	public static double getLRAangleThreshold() {
		return lRAangleThreshold;
	}

	// 前后倾斜阈值
	private static double fBAangleThreshold;

	public static double setFBAangleThreshold(double fBAangleThreshold1) {
		return fBAangleThreshold=fBAangleThreshold1;
	}
	public static double getFBAangleThreshold() {
		return fBAangleThreshold;
	}
	
	// 滑板压力阈值
	private static double pressThreshold;

	public static double getPressThreshold() {
		
		return pressThreshold;
	}
	public static double setPressThreshold(double pressThreshold1) {
		
		return pressThreshold=pressThreshold1;
	}
	
	// 碳滑板一剩余量阈值
	private static double firstLeftThreshold;


	public static double getFirstLeftThreshold() {
		return firstLeftThreshold;
	}
	
   public static double setFirstLeftThreshold(double firstLeftThreshold1) {
		
		return firstLeftThreshold=firstLeftThreshold1;
	}
	
	// 碳滑板二剩余量阈值
	private static double secondLeftThreshold;

	 public static double setSecondLeftThreshold(double secondLeftThreshold1) {
			
			return secondLeftThreshold=secondLeftThreshold1;
		}
	
	 public static double getSecondLeftThreshold() {
		return secondLeftThreshold;
	}
	
	// 机箱温度A阈值
		private static double devTempThreshold;
		
		public static double getDevTempThreshold() {
			return devTempThreshold;
		}

		public static double setDevTempThreshold( double devTempThreshold1) {
			return devTempThreshold= devTempThreshold1;
		}
		
		// 机箱温度B阈值
		private static double devTempBThreshold;
		public static double setDevTempBThreshold(double devTempBThreshold1){
			return devTempBThreshold=devTempBThreshold1;
		}

		public static double getDevTempBThreshold() {
			return devTempBThreshold;
		}
		
		// 	CPU温度阈值
		private static double cpuTempThreshold;

		public static double setCpuTempThreshold(double cpuTempThreshold1){
			return cpuTempThreshold=cpuTempThreshold1;
		}
		public static double getCpuTempThreshold() {
			return cpuTempThreshold;
		}
}
