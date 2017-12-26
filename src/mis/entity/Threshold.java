package mis.entity;

public class Threshold {
	private double centerBiaseThreshold;//中心线偏移阈值
	private double lRAangleThreshold;   //左右倾斜阈值
	private double fBAangleThreshold;   //前后倾斜阈值
	private double firstLeftThreshold;  //滑板一碳滑剩余量阈值
	private double secondLeftThreshold; //滑板二碳滑剩余量阈值
	private double pressThreshold;		//压力阈值
	private double devTempThreshold;    //设备一温度阈值
	private double devTempBThreshold;   //设备二温度阈值
	private double cpuTempThreshold;    //CPU温度阈值
	public double getCenterBiaseThreshold() {
		return centerBiaseThreshold;
	}
	public void setCenterBiaseThreshold(double centerBiaseThreshold) {
		this.centerBiaseThreshold = centerBiaseThreshold;
	}
	public double getlRAangleThreshold() {
		return lRAangleThreshold;
	}
	public void setLRAangleThreshold(double lRAangleThreshold) {
		this.lRAangleThreshold = lRAangleThreshold;
	}
	public double getfBAangleThreshold() {
		return fBAangleThreshold;
	}
	public void setFBAangleThreshold(double fBAangleThreshold) {
		this.fBAangleThreshold = fBAangleThreshold;
	}
	public double getFirstLeftThreshold() {
		return firstLeftThreshold;
	}
	public void setFirstLeftThreshold(double firstLeftThreshold) {
		this.firstLeftThreshold = firstLeftThreshold;
	}
	public double getSecondLeftThreshold() {
		return secondLeftThreshold;
	}
	public void setSecondLeftThreshold(double secondLeftThreshold) {
		this.secondLeftThreshold = secondLeftThreshold;
	}
	public double getPressThreshold() {
		return pressThreshold;
	}
	public void setPressThreshold(double pressThreshold) {
		this.pressThreshold = pressThreshold;
	}
	public double getDevTempThreshold() {
		return devTempThreshold;
	}
	public void setDevTempThreshold(double devTempThreshold) {
		this.devTempThreshold = devTempThreshold;
	}
	public double getDevTempBThreshold() {
		return devTempBThreshold;
	}
	public void setDevTempBThreshold(double devTempBThreshold) {
		this.devTempBThreshold = devTempBThreshold;
	}
	public double getCpuTempThreshold() {
		return cpuTempThreshold;
	}
	public void setCpuTempThreshold(double cpuTempThreshold) {
		this.cpuTempThreshold = cpuTempThreshold;
	}
	public Threshold() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
