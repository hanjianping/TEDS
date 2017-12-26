package mis.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import mis.entity.Carbon;
import mis.entity.Chart_center;
import mis.entity.Chart_device;
import mis.entity.Chart_lean;
import mis.entity.Chart_press;
import mis.entity.Device;
import mis.entity.Threshold;
import mis.entity.Train;
import mis.entity.Video;

@Component
public interface TrainDao {
	//列车状态
	public List<Train> findTrainList(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("trainState")String trainState,@Param("board")String board,@Param("lean")String lean,@Param("line")String line,@Param("press")String press,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo,@Param("isCurrentData")String isCurrentData);
	//打印列车数据(当日数据模块和历史数据模块)||导出excel表格数据
	public List<Train> printData(@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("trainState")String trainState,@Param("board")String board,@Param("lean")String lean,@Param("line")String line,@Param("press")String press,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo,@Param("isCurrentData")String isCurrentData);
  	//获取数据个数(分页使用)
	public int getTrainListCount(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("trainState")String trainState,@Param("board")String board,@Param("lean")String lean,@Param("line")String line,@Param("press")String press,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo,@Param("isCurrentData")String isCurrentData);
	//获取下拉列表数据(弓号)
	public List<Train> showselectPlaneNO();
	//获取下拉列表数据(列车编号和端号)
	public List<Train> showselectTrainNO();
	
	//设备状态
	public List<Device> findDeviceList(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("devId")String devId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate ,@Param("isCurrentData")String isCurrentData);
	//获取设备记录个数
	public int getDeviceListCount(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("devId")String devId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("isCurrentData")String isCurrentData);
	//获取下拉列表列车编号
	public List<Device> selectedDevice();
	//打印设备数据
	public List<Device>  printDeviceDate(@Param("devId")String devId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("isCurrentData")String isCurrentData);
	
	//分析数据--折线图数据
	//碳滑量
	public List<Carbon> showCarbonchart(@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo);
	//中心线偏移
	public List<Chart_center> showCenterchart(@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo);
	//倾斜偏移
	public List<Chart_lean> showLeanchart(@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo);
    //压力统计
	public List<Chart_press> showPresschart(@Param("trainId")String trainId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("duanNo")String duanNo,@Param("planeNo")String planeNo);

	public List<Chart_device> showDevicechart(@Param("devId")String devId,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate);

	//视频
	public List<Video> showCurrentVideo(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("trainID")String trainID,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("isCurrentData")String isCurrentData);
	//计算视频分页
   public int getVideoCount(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("trainID")String trainID,@Param("firstDate")String firstDate,@Param("lastDate")String lastDate,@Param("isCurrentData")String isCurrentData);
    //查看阈值
   public Threshold findThreshold();
   //修改阈值
   public void modifyThreshold(Threshold threshold);
}
