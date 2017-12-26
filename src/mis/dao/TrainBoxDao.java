package mis.dao;

import mis.entity.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface TrainBoxDao {
	//列车状态
	public List<TrainBox> findTrainList(@Param("pageNum") Integer pageNum, @Param("pageSize") int pageSize, @Param("trainId") String trainId, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,@Param("isCurrentData")String isCurrentData);
	public int getTrainListCount(@Param("pageNum") Integer pageNum, @Param("pageSize") int pageSize, @Param("trainId") String trainId, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,@Param("isCurrentData")String isCurrentData);
	public List<TrainBox> showselectTrainNO();
}
