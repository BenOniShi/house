package com.domain.house.mapper;

import com.domain.house.entity.CountName;
import com.domain.house.entity.CountNameRent;
import com.domain.house.entity.House;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.domain.house.entity.ValueName;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
public interface HouseMapper extends BaseMapper<House> {

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
