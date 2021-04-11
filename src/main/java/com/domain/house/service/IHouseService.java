package com.domain.house.service;

import com.domain.house.entity.CountName;
import com.domain.house.entity.House;
import com.baomidou.mybatisplus.extension.service.IService;
import com.domain.house.entity.ValueName;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
public interface IHouseService extends IService<House> {

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
}
