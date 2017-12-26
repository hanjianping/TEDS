package mis.action;


import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;


import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import mis.dao.TrainDao;
import mis.entity.Threshold;
import mis.util.Configuration;


@Component
public class InitAction implements ServletContextListener,ApplicationContextAware{
	
	private static ApplicationContext applicationContext;
	@Autowired
	TrainDao trainDao;
	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		this.applicationContext=applicationContext;
	}

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {
		ServletContext application=servletContextEvent.getServletContext();
	   TrainDao trainDao=(TrainDao) applicationContext.getBean("trainDao");
		Threshold threshold=new Threshold();
		threshold=trainDao.findThreshold();
        Configuration.setPressThreshold(threshold.getPressThreshold());
        Configuration.setCpuTempThreshold(threshold.getCpuTempThreshold());
        Configuration.setDevTempBThreshold(threshold.getDevTempBThreshold());
        Configuration.setDevTempThreshold(threshold.getDevTempThreshold());
        Configuration.setCenterBiaseThreshold(threshold.getCenterBiaseThreshold());
        Configuration.setLRAangleThreshold(threshold.getlRAangleThreshold());
        Configuration.setFBAangleThreshold(threshold.getfBAangleThreshold());
        Configuration.setFirstLeftThreshold(threshold.getFirstLeftThreshold());
        Configuration.setSecondLeftThreshold(threshold.getSecondLeftThreshold());
	}
	
}
