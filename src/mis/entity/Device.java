package mis.entity;

import java.util.Date;

public class Device {
	private int id;
	private String devId; //设备编号
	private Date devTime;	//检测时间
	private float devTemp; //机箱温度A
	private float devTemp2;   //机箱温度B
	private float cpuTemp;    //cpu温度
	private String devDoor;       //窗口日志
	private String devReduce;   //降温设备
	private String devHeat;     //加热设备
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDevId() {
		return devId;
	}
	public void setDevId(String devId) {
		this.devId = devId;
	}
	public Date getDevTime() {
		return devTime;
	}
	public void setDevTime(Date devTime) {
		this.devTime = devTime;
	}
	public float getDevTemp() {
		return devTemp;
	}
	public void setDevTemp(float devTemp) {
		this.devTemp = devTemp;
	}
	public float getDevTemp2() {
		return devTemp2;
	}
	public void setDevTemp2(float devTemp2) {
		this.devTemp2 = devTemp2;
	}
	public float getCpuTemp() {
		return cpuTemp;
	}
	public void setCpuTemp(float cpuTemp) {
		this.cpuTemp = cpuTemp;
	}
	public String getDevDoor() {
		return devDoor;
	}
	public void setDevDoor(String devDoor) {
		this.devDoor = devDoor;
	}
	public String getDevReduce() {
		return devReduce;
	}
	public void setDevReduce(String devReduce) {
		this.devReduce = devReduce;
	}
	public String getDevHeat() {
		return devHeat;
	}
	public void setDevHeat(String devHeat) {
		this.devHeat = devHeat;
	}
	public Device() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
