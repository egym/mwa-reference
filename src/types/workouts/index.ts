export enum TrainingPlanGroupType {
  USER_OWN = 'USER_OWN',
  TRAINER_ASSIGNED = 'TRAINER_ASSIGNED',
  BRAND_SPECIFIC = 'BRAND_SPECIFIC',
}

export enum WorkoutExerciseSetField {
  NUMBER_OF_REPS = 'numberOfReps',
  WEIGHT = 'weight',
  DURATION = 'duration',
  DISTANCE = 'distance',
  HEART_RATE = 'heartRate',
  SPEED = 'speed',
  INCLINE = 'incline',
  RECOVERY_TIME = 'recoveryTime',
}

export enum WorkoutExerciseSetType {
  REP_BASED = 'REP_BASED',
  TIME_BASED = 'TIME_BASED',
}

export type WorkoutExerciseSet = {
  setType: WorkoutExerciseSetType;
  [WorkoutExerciseSetField.NUMBER_OF_REPS]?: number | null;
  [WorkoutExerciseSetField.WEIGHT]?: number | null;
  [WorkoutExerciseSetField.DURATION]?: number | null;
  [WorkoutExerciseSetField.DISTANCE]?: number | null;
  [WorkoutExerciseSetField.HEART_RATE]?: number | null;
  [WorkoutExerciseSetField.SPEED]?: number | null;
  [WorkoutExerciseSetField.INCLINE]?: number | null;
  [WorkoutExerciseSetField.RECOVERY_TIME]?: number | null;
};

export type ActivityId = string | number;

export interface MuscleMapping {
  BICEPS: number;
  LATISSIMUS: number;
  GLUTEUS_MAXIMUS: number;
  QUADRICEPS: number;
}

export enum ActivityCategory {
  STRENGTH = 'STRENGTH',
  SPORT = 'SPORT',
  FITNESS_CLASS = 'FITNESS_CLASS',
  ENDURANCE = 'ENDURANCE',
  MOBILITY = 'MOBILITY',
  EGYM_MACHINE = 'EGYM_MACHINE',
  EGYM_CIRCLE = 'EGYM_CIRCLE',
  UNKNOWN = 'UNKNOWN',

  FREE_WEIGHTS = 'FREE_WEIGHTS',
  WEIGHT_MACHINE_BASED = 'WEIGHT_MACHINE_BASED',
  BODY_WEIGHT_BASED = 'BODY_WEIGHT_BASED',
  DAILY_ROUTINE = 'DAILY_ROUTINE',
}

export type LocalizedMessage = Record<string, string>;

type Synonyms = Record<string, string[]>;

export interface Activity {
  activityId: ActivityId;
  activityParentId: any;
  muscleMapping: Partial<MuscleMapping>;
  category: ActivityCategory;
  difficulty: string;
  met: number;
  bodyWeightRatio: number | null;
  rangeOfMotion: number | null;
  multiJoint: boolean;
  status: string;
  name: Record<string, string>;
  description: LocalizedMessage;
  synonyms: Synonyms;
  images: string[];
  videos: any[];
  previews: any[];
  availableForMaxStrengthTests: boolean;
  recommendedForMuscleImbalance: boolean;
  strengthBenchmarkMale: number | null;
  strengthBenchmarkFemale: number | null;
  calculationMethod: string | null;
  maxStrengthTestBodyRegion: string | null;
  manuallyTracked: boolean;
  updatedAt: number;
  equipments: Equipment[];
  clientMetadata: unknown;
  categories: Categories;
  weightGuidance?: string | null;
}

export interface Equipment {
  id: number | null;
  type: string;
  images: any[];
  names: LocalizedMessage;
  createAt: number | null;
  updatedAt: number | null;
}

export interface Categories {
  category: ActivityCategory;
  child?: Categories | null;
}

export enum ExerciseSourceType {
  MANUAL = 'MANUAL',
  CONNECTED_APP = 'CONNECTED_APP',
  X_CAPTURE = 'X_CAPTURE',
  FITNESS_MACHINE_SOURCE = 'FITNESS_MACHINE_SOURCE',
  HRM_EQUIPMENT = 'HRM_EQUIPMENT',
}

export type AdvancedWorkoutExercise = {
  id: number;
  label: string;
  activity: Activity;
  sets: WorkoutExerciseSet[];
  editable: boolean;
  deletable: boolean;
  completedAt: string | null;
  timezone: string | null;
  sourceType: ExerciseSourceType;
  source: string | null;
  origin: string | null;
  kiloCalories: number;
  points: number;
  hrmData: AdvancedWorkoutHrmData | null;
  matrixSprint8: AdvancedWorkoutMatrixSprint8 | null;
  partnerData: AdvancedWorkoutPartnerData | null;
  summary: AdvancedWorkoutSummary | null;
};

export type AdvancedWorkoutSummary = {
  totalDuration: number | null;
  totalDistance: number | null;
  verticalDistance: number | null;
  avgPace: number | null;
  avgHeartRate: number | null;
  maxHeartRate: number | null;
  avgSpeed: number | null;
  avgIncline: number | null;
};

export type AdvancedWorkoutMatrixSprint8 = {
  totalSweatScore: number;
  sprint1Score: number;
  sprint2Score: number;
  sprint3Score: number;
  sprint4Score: number;
  sprint5Score: number;
  sprint6Score: number;
  sprint7Score: number;
  sprint8Score: number;
  programLevel: number;
};

export type AdvancedWorkoutPartnerData = {
  partnerPoints: number;
  pointsLabel: string;
  location: string;
};

export type AdvancedWorkoutHrmData = {
  targetHeartRate: number;
  zones: AdvancedWorkoutHrmDataZone[];
};

export type AdvancedWorkoutHrmDataZone = {
  min: number;
  max: number;
  duration: number;
  label: string;
  orderNumber: number;
};

export type AdvancedWorkout = {
  exercises: AdvancedWorkoutExercise[];
  completedAt: string;
  timezone: string;
  templateGroupId: number | null;
  workoutPlanName: string | null;
  workoutPlanImageUrl: string | null;
  workoutPlanGroupType: TrainingPlanGroupType | null;
};
