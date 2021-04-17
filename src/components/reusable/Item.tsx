import React from 'react';
import { ISectionDataItem } from '../../types';
import { formatNum } from '../../utils/misc';
import { FaDollarSign, IoIosArrowForward, RiHeartAddLine } from 'react-icons/all';

interface IItemProps extends ISectionDataItem {}

export const Item: React.FC<IItemProps> = ({ figure, details }): JSX.Element => {
    return (
        <li className={ `item ${ details.content.linkContent ? 'link-content' : '' }` }>
            <article>
                <div className="item__item-card">
                    <figure>
                        <img src={ figure.url } alt={ figure.figcaption } className="item__image" />
                        <figcaption>{ figure.figcaption }</figcaption>
                        { figure.badge && <img src={ figure.badge } alt={ figure.badge } className="item__badge" /> }
                    </figure>

                    <div className="item__item-card-content">
                        <header className="item__item-card-content-header">
                            <h3 className="item__title">{ details.header.title }</h3>
                            <p className="item__vendor"><span>{ details.header.vendor.name }</span><span>{ details.header.vendor.location }</span></p>
                        </header>

                        <div className="item__item-card-content-body">
                            {
                                details.content.linkContent
                                    ? (<button aria-label={ details.content.linkContent } className="item__item-card-content-link">
                                        { details.content.linkContent } <IoIosArrowForward />
                                    </button>)
                                    :
                                    <div className="item__item-card-content-body-wrapper">
                                        <div className="item__item-card-content-purchase-count">{ details.content.purchaseCount ? `${ details.content.purchaseCount } bought` : '' }</div>
                                        <div className="item__item-card-content-pricing">
                                            { details.content.price.oldPrice &&
                                            <span className="item__item-card-content-pricing-old"><FaDollarSign />{ formatNum(details.content.price.oldPrice) }</span>
                                            }
                                            <span className="item__item-card-content-pricing-new"><FaDollarSign />{ formatNum(details.content.price.newPrice!) }</span>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="item__wish-btn"><RiHeartAddLine /></div>
            </article>
        </li>
    );
};
