interface SpaceXData {
    mission_name: string;
    launch_year: string;
    details: string;
    links: Links;
    rocket: Rocket;

    
}

interface Links {
    mission_patch_small: string;

}

interface Rocket {
    rocket_name: string;
    rocket_type: string;
}

export default SpaceXData