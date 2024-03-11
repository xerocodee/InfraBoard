//compute
import ComputeEngine from "./compute/ComputeEngine"
import AppEngine from "./compute/AppEngine"
import ContainerEngine from "./compute/ContainerEngine"
import CloudGPU from "./compute/CloudGPU"
import CloudTPU from "./compute/CloudTPU"

//networking
import CloudCDN from "./network/CloudCDN"
import CloudDNS from "./network/CloudDNS"
import CloudNetwork from "./network/CloudNetwork"

//tools
import Debugger from "./tools/Debugger"


const GCPIcons = {
    //compute
    ComputeEngine,
    AppEngine,
    ContainerEngine,
    CloudGPU,
    CloudTPU,

    //networking
    CloudCDN,
    CloudDNS,
    CloudNetwork,

    //tools
    Debugger
}

export { GCPIcons }