package com.domain.house.service;

import com.domain.house.entity.CountName;
import com.domain.house.entity.CountNameRent;
import com.domain.house.entity.House;
import com.baomidou.mybatisplus.extension.service.IService;
import com.domain.house.entity.ValueName;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
public interface IHouseService extends IService<House> {

    List<CountNameRent> districtGroupCount(Integer min,Integer max);

    List<CountName> layoutGroupCount(Integer min,Integer max);

    List<CountName> businessGroupCount(Integer min,Integer max);

    List<ValueName> areaGroupCount(Integer min,Integer max);

    List<ValueName> orientationGroupCount(Integer min,Integer max);

    List<ValueName> renovationGroupCount(Integer min,Integer max);

    List<ValueName> parkingGroupCount(Integer min,Integer max);

    List<ValueName> floorGroupCount(Integer min,Integer max);

    List<ValueName> liftGroupCount(Integer min,Integer max);

    List<ValueName> waterGroupCount(Integer min,Integer max);

    List<ValueName> kwhGroupCount(Integer min,Integer max);

    List<ValueName> gasGroupCount(Integer min,Integer max);

    List<ValueName> heatingGroupCount(Integer min,Integer max);

    List<CountName> top20RentBusiness(Integer min,Integer max);

    List<CountName> top10AvgRent(Integer min,Integer max);

    List<CountName> reciprocal10AvgRent(Integer min,Integer max);

    List<House> mapPoint(Integer min,Integer max);

    List<CountNameRent> businessGroupByOfRent(Integer min, Integer max);
}
