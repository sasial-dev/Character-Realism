interface StepValue {
    Goal: number;
    Current: number;
}

interface PitchYaw {
    Pitch: number;
    Yaw: number;
}

interface Rotator {
    Motors: Motor6D[];

    Pitch: StepValue;
    Yaw: StepValue;
}

interface Config {
    Sounds: {
        Dirt: number;
		Wood: number;
		Concrete: number;
		Grass: number;
		Metal: number;
		Sand: number;
		Fabric: number;
		Gravel: number;
		Marble: number;
    }
    MaterialMap: { [index: string]: string };
    RotationFactors: {
        Head: PitchYaw;
        UpperTorso: PitchYaw;
        LeftUpperArm: PitchYaw;
        RightUpperArm: PitchYaw;
        Torso: PitchYaw;
        ["Left Arm"]: PitchYaw;
        ["Right Arm"]: PitchYaw;
        ["Left Leg"]: PitchYaw;
        ["Right Leg"]: PitchYaw;
    }
}

interface CharacterRealism {
    Connect(functionName: keyof Omit<CharacterRealism, "Connect">, event: RBXScriptSignal): RBXScriptConnection;

    AddMotor(rotator: Rotator, motor: Motor6D): void;

    OnLookReceive(player: Player, pitch: number, yaw: number): void;
    ComputeLookAngle(lookVector?: Vector3, useDir?: -1 | 1): LuaTuple<[number, number]>;
    StepValue(state: StepValue, delta: number): number;
    
    UpdateLookAngles(delta: number): void;
    MountLookAngle(humanoid: Humanoid): Rotator;
    MountMaterialSounds(humanoid: Humanoid): void;
    
    OnHumanoidAdded(humanoid: Humanoid): void;

    Start(Config: Config): void;
}

declare const CharacterRealism: CharacterRealism;

export = CharacterRealism;
