import React from 'react';
import './PricingTable.css';
const PricingTable = () => {
    return (
        <div className='table-space'>
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th className='background'>proxey name</th>
                    <th>Validity</th>
                    <th>Number of proxy</th>
                    <th>Price</th>
                </tr>
            </thead>
           <tbody>
               <tr>
                   <td rowSpan="4" className='background'>VIP 72</td>
                   <td className="text-center">30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td rowSpan="3" className='background'>VIP 72</td>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               <tr>
                   <td>30 dAYS</td>
                   <td>250 IP</td>
                   <td>8000 taka</td>
               </tr>
               
            
           </tbody>
        </table>
    </div>
    );
};

export default PricingTable;