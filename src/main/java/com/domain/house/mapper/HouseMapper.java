package com.domain.house.mapper;

import com.domain.house.entity.CountName;
import com.domain.house.entity.House;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.domain.house.entity.ValueName;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
public interface HouseMapper extends BaseMapper<House> {

    List<CountName> districtGroupCount();

    List<CountName> layoutGroupCount();

    List<CountName> businessGroupCount();

    List<ValueName> areaGroupCount();

    List<ValueName> orientationGroupCount();

    List<ValueName> renovationGroupCount();

    List<ValueName> parkingGroupCount();

    List<ValueName> floorGroupCount();

    List<ValueName> liftGroupCount();

    List<ValueName> waterGroupCount();

    List<ValueName> kwhGroupCount();

    List<ValueName> gasGroupCount();

    List<ValueName> heatingGroupCount();

    List<CountName> top20RentBusiness();

    List<CountName> top10AvgRent();

    List<CountName> reciprocal10AvgRent();
}
